"use client";

interface Arts {
    id: number;
    title: string;
    image_id: string;
}

interface ModalProps {
  image: Arts | null;
  onClose: () => void;
}

const ImageModal: React.FC<ModalProps> = ({image, onClose}) => {
    if (!image) return null;
    return(
        <div className="fixed inset-0 bg-gray-300
        
        bg-opacity-0 flex items-center justify-center z-50" onClick={() => onClose()}>
          <div className="bg-white rounded-lg p-6 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => onClose()} className="float-right text-2xl font-bold">×</button>
            <img src={`https://www.artic.edu/iiif/2/${image.image_id}/full/600,/0/default.jpg`} alt={image.title} className="w-full rounded-md mb-4" />
            <p className="text-lg font-semibold">{image.title}</p>
          </div>
        </div>
    );
};

export default ImageModal;