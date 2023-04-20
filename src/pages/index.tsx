import { Inter } from 'next/font/google'
import { Canvas } from '@react-three/fiber'
import Box from '@/components/canvas/box'
import style from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Canvas style={{position: 'fixed', top: '0px', left: '0px', width: '100vw', height: '100vh', zIndex: 1}}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
      <div className={style.overlay}>
        {process.env.NEXT_PUBLIC_TEST}
        <button onClick={() => alert('hello world')}>hi</button>
      </div>
    </div>
  )
}
