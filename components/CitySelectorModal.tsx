'use client';
import { cities } from '@/data/cities';

export default function CitySelectorModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="dm-overlay open" onClick={onClose}>
      <div className="dm-modal" onClick={e => e.stopPropagation()}>
        <a href="#" className="close" onClick={e => { e.preventDefault(); onClose(); }}>×</a>
        <h3>Выберите город:</h3>
        <table>
          <tbody>
            {chunk(cities, 4).map((row, i) => (
              <tr key={i}>
                {row.map(c => (
                  <td key={c.slug}><a href={`/${c.slug}`}>{c.name}</a></td>
                ))}
                {row.length < 4 && Array(4 - row.length).fill(0).map((_, j) => <td key={`empty-${j}`} />)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function chunk<T>(arr: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) result.push(arr.slice(i, i + size));
  return result;
}