// File copy pasted from https://github.com/pmndrs/react-postprocessing/blob/master/src/util.tsx

import React, { forwardRef, useMemo, useLayoutEffect } from "react";
import { useThree } from "@react-three/fiber";
import { BlendFunction } from "postprocessing";

const isRef = (ref) => !!ref.current;

export const resolveRef = (ref) => (isRef(ref) ? ref.current : ref);

export const wrapEffect = (
  effectImpl,
  defaultBlendMode = BlendFunction.NORMAL
) =>
  forwardRef(function Wrap({ blendFunction, opacity, ...props }, ref) {
    const invalidate = useThree((state) => state.invalidate);
    const effect = useMemo(() => new effectImpl(props), [props]);

    useLayoutEffect(() => {
      effect.blendMode.blendFunction =
        !blendFunction && blendFunction !== 0
          ? defaultBlendMode
          : blendFunction;
      if (opacity !== undefined) effect.blendMode.opacity.value = opacity;
      invalidate();
    }, [blendFunction, effect.blendMode, opacity]);
    return <primitive ref={ref} object={effect} dispose={null} />;
  });
