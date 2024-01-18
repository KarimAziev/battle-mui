import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import battleAnimationData from '@/assets/lottie/swords.json';

interface BattleAnimationProps {
  onBattleEnd: () => void;
}

const BattleAnimation = ({ onBattleEnd }: BattleAnimationProps) => {
  const animationContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animationContainerRef.current) return;

    const anim = lottie.loadAnimation({
      container: animationContainerRef.current,
      animationData: battleAnimationData,
      renderer: 'svg',
      loop: false,
      autoplay: true,
    });

    const timeout = setTimeout(() => {
      anim.stop();
      onBattleEnd();
    }, 10000);

    return () => {
      clearTimeout(timeout);
      anim.destroy();
    };
  }, [onBattleEnd]);

  return <div ref={animationContainerRef} style={{ height: '60vh' }} />;
};

export default BattleAnimation;
