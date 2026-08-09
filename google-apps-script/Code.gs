/**
 * Bayti Pack — réception des commandes du site dans Google Sheets.
 *
 * Installation : voir README.md dans ce même dossier.
 */

var SHEET_NAME = "Commandes";
var WHATSAPP_NUMBER = "212661793619"; // format international, sans le "+"

function doPost(e) {
  var result = { ok: true };

  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = getOrCreateSheet_();

    var order = {
      name: data.name || "",
      phone: data.phone || "",
      city: data.city || "",
      address: data.address || "",
      packName: data.packName || "",
      quantity: data.quantity || "",
      total: data.total || "",
      locale: data.locale === "ar" ? "Arabe" : "Français",
    };

    var whatsappLink = buildWhatsAppLink_(order);

    sheet.appendRow([
      new Date(),
      order.name,
      order.phone,
      order.city,
      order.address,
      order.packName,
      order.quantity,
      order.total,
      order.locale,
      whatsappLink,
    ]);
  } catch (err) {
    result = { ok: false, error: String(err) };
  }

  return ContentService
    .createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}

function buildWhatsAppLink_(order) {
  var message = [
    "🛒 Nouvelle commande Bayti Pack",
    "",
    "Nom : " + order.name,
    "Téléphone : " + order.phone,
    "Ville : " + order.city,
    "Adresse : " + order.address,
    "Pack : " + order.packName,
    "Quantité : " + order.quantity,
    "Total : " + order.total + " DH",
    "Langue choisie : " + order.locale,
  ].join("\n");

  return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
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
