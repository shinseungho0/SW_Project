import React from 'react';
import Header from './components/Header';
import MyEditor from './components/MyEditor';
import ThreeModelButton from './components/ThreeModelButton';
import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap 적용
import './quillstyle.css'

/*import { Canvas } from "react-three-fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import { Suspense } from 'react';
import Plane from "./components/model";*/

const App = () => {
  return (
    <div>
      <Header/>
      <MyEditor />
      <ThreeModelButton />
    </div>
    /*<Canvas style={{ height: 400, width: 400 }}>
        <pointLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
        <Plane rotation={[0, Math.PI * 1.25, 0]} />
        </Suspense>
        <OrbitControls />
        <Stats />
      </Canvas>*/
  );
};

export default App;