// when text file is fetched, this splits it into blocks.

export function blockSplitter(text) {
  const blocks = text.split(/\s*\n\s*\n\s*/);

  return blocks.map((block) => block.trim());
}
