import MUIModal from "@mui/material/Modal";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import toast, { Toaster } from "react-hot-toast";
import { FaPlay } from "react-icons/fa";
import {
  CheckIcon,
  PlusIcon,
  ThumbUpIcon,
  VolumeOffIcon,
  VolumeUpIcon,
  XIcon,
} from "@heroicons/react/outline";

const Modal = () => {
  const [showModal, setShowModal] = useRecoilState(modalState);

  const handleClose = () => {
    setShowModal(false);
  };

  const toastStyle = {
    background: "white",
    color: "black",
    fontWeight: "bold",
    fontSize: "16px",
    padding: "15px",
    borderRadius: "9999px",
    maxWidth: "1000px",
  };

  return (
    <MUIModal
      open={showModal}
      onClose={handleClose}
      className="fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"
    >
      <>
        <Toaster position="bottom-center" />
        <button
          className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]"
          onClick={handleClose}
        >
          <XIcon className="h-6 w-6" />
        </button>
        <div className="absolute bottom-10 flex w-full items-center justify-between px-10">
          <div className="flex space-x-2">
            <button className="flex items-center gap-x-2 rounded bg-white px-8 text-xl font-bold text-black transition hover:bg-[#e6e6e6]">
              <FaPlay className="h-7 w-7 text-black" />
              Play
            </button>
            <button
              className="modalButton"
              // onClick={handleList}
            >
              <CheckIcon className="h-7 w-7" />
              {/* {addedToList ? (
                  <CheckIcon className="h-7 w-7" />
                ) : (
                  <PlusIcon className="h-7 w-7" />
                )} */}
            </button>
            <button className="modalButton">
              <ThumbUpIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </>
    </MUIModal>
  );
};

export default Modal;
