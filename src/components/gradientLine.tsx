interface GradientLineProps {
    direction?: 'left' | 'right';
    weight?: string;
  }
  
  export default function GradientLine({ direction = 'left', weight = '1px' }: GradientLineProps) {
    const gradientDirection = direction === 'left' ? 'bg-gradient-to-l' : 'bg-gradient-to-r';
  
    return (
      <div className={`${gradientDirection} from-[#e6eaf0] via-[#e6eaf0]/100 to-[#e6eaf0]/0 flex-grow flex-shrink-0 h-[${weight}] overflow-hidden relative w-[1px] animation-1`}></div>
    );
  }
  