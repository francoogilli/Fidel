interface GradientLineProps {
    direction?: 'left' | 'right';
  }
  
  export default function GradientLine({ direction = 'left' }: GradientLineProps) {
    const gradientDirection = direction === 'left' ? 'bg-gradient-to-l' : 'bg-gradient-to-r';
  
    return (
      <div className={`${gradientDirection} from-[#e6eaf0] via-[#e6eaf0]/100 to-[#e6eaf0]/0 flex-grow flex-shrink-0 h-[1px] overflow-hidden relative w-[1px] animation-1`}></div>
    );
  }
  