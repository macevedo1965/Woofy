"use client";

import { useFormStatus } from "react-dom";

const AddPostButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      className="bg-orange-500 px-2 h-6 rounded-md text-white text-xs disabled:bg-orange-300 disabled:cursor-not-allowed self-end"
      disabled={pending}
    >
      {pending ? (
        <div className="flex items-center gap-2">
          <div className="inline-block h-[10px] w-[10px] animate-spin rounded-full border-2 border-white-300 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite]" />
          Publicando...
        </div>
      ) : (
        "Publicar"
      )}
    </button>
  );
};

export default AddPostButton;
