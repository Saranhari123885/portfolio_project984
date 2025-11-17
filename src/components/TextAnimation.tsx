interface TextAnimationProps {
  text: string;
  className?: string;
}

export default function TextAnimation({ text, className = '' }: TextAnimationProps) {
  const letters = text.split('');

  return (
    <span className={className}>
      {letters.map((letter, index) => (
        <span
          key={index}
          className="inline-block transition-all duration-300 hover:scale-125 hover:text-cyan-400"
          style={{
            animation: `fadeIn 0.5s ease-out ${index * 0.05}s both`,
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </span>
  );
}
