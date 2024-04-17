//  Imports
// ===========================================================

// Components
import { MotionEnterLeft } from '@/components/shared/MotionEnter';


//  Types
// ===========================================================

type ComponentProps = {
  id: string;
  title: string;
  description: string;
}


//  Titles (variants)
// ===========================================================

export const h2: React.FC<ComponentProps> = ({ id, title, description }) => {
  return (
    <>
      <MotionEnterLeft delay={0.25} duration={1}>
        <h2 className="font-f3 font-normal">
          <span className="text-2xl text-primary font-thin">{id}. </span>
          <span className="text-3xl text-secondary font-bold">{title}</span>
        </h2>
      </MotionEnterLeft>
      <MotionEnterLeft delay={0.5} duration={1}>
        <p className="font-f3 font-normal text-xl text-neutral-content">
          {description}
        </p>
      </MotionEnterLeft>
    </>
  );
}
