// creates a blob from edited text, which is formed in unitFileEditing.js and makes download link for user to get the file ready to be used in game.

export function linkCreator(editedText) {
  const blob = new Blob([editedText], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "export_descr_unit.txt";

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
