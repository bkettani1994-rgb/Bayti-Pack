/**
 * Bayti Pack — réception des commandes du site dans Google Sheets.
 *
 * Installation : voir README.md dans ce même dossier.
 */

var SHEET_NAME = "Commandes";

function doPost(e) {
  var result = { ok: true };

  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = getOrCreateSheet_();

    var localeCode = data.locale === "ar" ? "ar" : "fr";
    var order = {
      name: data.name || "",
      phone: data.phone || "",
      city: data.city || "",
      address: data.address || "",
      packName: data.packName || "",
      quantity: data.quantity || "",
      total: data.total || "",
      localeLabel: localeCode === "ar" ? "Arabe" : "Français",
    };

    var whatsappLink = buildWhatsAppLink_(order, localeCode);

    sheet.appendRow([
      new Date(),
      order.name,
      order.phone,
      order.city,
      order.address,
      order.packName,
      order.quantity,
      order.total,
      order.localeLabel,
      whatsappLink,
    ]);
  } catch (err) {
    result = { ok: false, error: String(err) };
  }

  return ContentService
    .createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Construit le lien WhatsApp vers le numéro du CLIENT (celui qui a
 * passé la commande), avec un message de remerciement + le récapitulatif
 * de la commande + une demande de confirmation par message.
 */
function buildWhatsAppLink_(order, localeCode) {
  var message = localeCode === "ar"
    ? buildArabicMessage_(order)
    : buildFrenchMessage_(order);

  var phone = normalizePhone_(order.phone);
  return "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
}

function buildFrenchMessage_(order) {
  return [
    "Bonjour " + order.name + " 👋",
    "",
    "Merci d'avoir commandé chez Bayti Pack ! 🎉",
    "",
    "📦 Récapitulatif de votre commande :",
    "- Pack : " + order.packName,
    "- Quantité : " + order.quantity,
    "- Total : " + order.total + " DH",
    "- Ville : " + order.city,
    "- Adresse : " + order.address,
    "",
    "Merci de confirmer votre commande en répondant simplement OUI à ce message ✅",
  ].join("\n");
}

function buildArabicMessage_(order) {
  return [
    "مرحباً " + order.name + " 👋",
    "",
    "شكراً لكم على طلبكم من Bayti Pack! 🎉",
    "",
    "📦 ملخص طلبكم:",
    "- الباقة: " + order.packName,
    "- الكمية: " + order.quantity,
    "- المجموع: " + order.total + " درهم",
    "- المدينة: " + order.city,
    "- العنوان: " + order.address,
    "",
    "يرجى تأكيد طلبكم بالرد بـ نعم على هذه الرسالة ✅",
  ].join("\n");
}

/**
 * Normalise un numéro marocain vers le format international attendu
 * par wa.me (sans "+", sans espaces). Ex : "06 00 00 00 00" -> "212600000000".
 */
function normalizePhone_(phone) {
  var digits = String(phone).replace(/\D/g, "");

  if (digits.charAt(0) === "0") {
    return "212" + digits.slice(1);
  }
  if (digits.indexOf("212") === 0) {
    return digits;
  }
  return digits;
}

function getOrCreateSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow([
      "Date",
      "Nom",
      "Téléphone",
      "Ville",
      "Adresse",
      "Pack",
      "Quantité",
      "Total (DH)",
      "Langue",
      "Lien WhatsApp",
    ]);
    sheet.setFrozenRows(1);
    sheet.autoResizeColumns(1, 10);
  }

  return sheet;
}

/**
 * Utilitaire pour tester le script depuis l'éditeur Apps Script
 * (menu Exécuter > testDoPost), sans avoir besoin du site.
 */
function testDoPost() {
  var fakeEvent = {
    postData: {
      contents: JSON.stringify({
        name: "Client Test",
        phone: "0600000000",
        city: "Casablanca",
        address: "12 Rue de test, Maarif",
        packName: "Pack Cuisine Essentielle",
        quantity: 2,
        total: 311,
        locale: "fr",
      }),
    },
  };
  var output = doPost(fakeEvent);
  Logger.log(output.getContent());
}
