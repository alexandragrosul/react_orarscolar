export function parseStringToJson(jsonString) {
  // Remove HTML tags and unescape HTML entities
  if (!jsonString) return null;
  console.log(jsonString);
  const cleanedString = jsonString
    .replace(/<[^>]+>/g, "")
    .replace(/&#91;/g, "[")
    .replace(/&quot;/g, '"');

  // Parse the JSON string into an object
  try {
    const parsedObject = JSON.parse(cleanedString);
    return parsedObject;
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return null;
  }
}

export function parseHtmlToJson(htmlString) {
  // Create a new DOMParser
  const parser = new DOMParser();

  // Parse the HTML string
  const parsedHtml = parser.parseFromString(htmlString, "text/html");

  // Find the <code> element and get its content
  const codeElement = parsedHtml.querySelector("code");
  debugger;
  const jsonText = codeElement.textContent;

  // Replace HTML entities with their decoded values
  const decodedJson = jsonText.replace(/&#91;/g, "[").replace(/&quot;/g, '"');

  // Parse the JSON string into an object
  try {
    const parsedObject = JSON.parse(decodedJson);
    return parsedObject;
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return null;
  }
}
