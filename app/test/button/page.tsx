'use client';

import DynamicButton from '../../components/DynamicButton';

export default function TestButtonPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <DynamicButton onClick={() => alert('Clicked!')}>
        Click Me
      </DynamicButton>
    </div>
  );
}
