import type { ReactNode } from 'react';

function inline(text: string): ReactNode[] {
  return text.split(/(\*\*.+?\*\*|\*.+?\*)/g).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={index}>{part.slice(2, -2)}</strong>;
    if (part.startsWith('*') && part.endsWith('*')) return <em key={index}>{part.slice(1, -1)}</em>;
    return part;
  });
}

export default function RuleMarkdown({ content }: { content: string }) {
  const blocks = content.trim().split(/\n\s*\n/).filter(Boolean);
  return <div className="mt-5 space-y-5 text-lg leading-9">
    {blocks.map((block, index) => {
      const heading = block.match(/^(#{1,6})\s+(.+)$/);
      if (heading) {
        const level = heading[1].length;
        const className = level <= 3 ? 'text-xl font-semibold leading-8' : 'font-semibold leading-8';
        return <h3 key={index} className={className}>{inline(heading[2].replace(/\*\*/g, ''))}</h3>;
      }
      if (/^\s*-\s+/.test(block) && block.split('\n').every(line => /^\s*-\s+/.test(line))) {
        return <ul key={index} className="list-disc space-y-1 pl-7">{block.split('\n').map((line, itemIndex) => <li key={itemIndex}>{inline(line.replace(/^\s*-\s+/, ''))}</li>)}</ul>;
      }
      if (/^\s*>\s?/.test(block)) {
        return <blockquote key={index} className="border-l-2 border-[#C89A3D] pl-5 text-[#4B5563]">{inline(block.split('\n').map(line => line.replace(/^\s*>\s?/, '')).join(' '))}</blockquote>;
      }
      if (/^---+$/.test(block.trim())) return null;
      return <p key={index}>{inline(block.replace(/\n/g, ' '))}</p>;
    })}
  </div>;
}
