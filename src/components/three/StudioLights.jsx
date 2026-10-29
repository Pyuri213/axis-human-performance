import { Environment, Lightformer } from "@react-three/drei";
import useMacbookStore from "../../store";

const StudioLights = () => {
  const { theme } = useMacbookStore();
  const isLight = theme === "light";

  return (
    <group name="lights">
      <Environment resolution={256}>
        <group>
          <Lightformer
            form="rect"
            intensity={isLight ? 14 : 10}
            color={isLight ? "#ffffff" : "#f0dec0"}
            position={[-10, 5, -5]}
            scale={10}
            rotation-y={Math.PI / 2}
          />
          <Lightformer
            form="rect"
            intensity={isLight ? 14 : 10}
            color={isLight ? "#ffffff" : "#e5c99e"}
            position={[10, 0, 1]}
            scale={10}
            rotation-y={Math.PI / 2}
          />
        </group>
      </Environment>
      <ambientLight intensity={isLight ? 0.65 : 0.25} />
      <spotLight
        position={[-2, 10, 5]}
        angle={0.18}
        decay={0}
        intensity={isLight ? Math.PI * 0.45 : Math.PI * 0.25}
      />
      <spotLight
        position={[0, -25, 10]}
        angle={0.18}
        decay={0}
        intensity={isLight ? Math.PI * 0.35 : Math.PI * 0.2}
      />
      <spotLight
        position={[0, 15, 5]}
        angle={0.18}
        decay={0.1}
        intensity={isLight ? Math.PI * 1.2 : Math.PI * 1}
      />
    </group>
  );
};

export default StudioLights;
