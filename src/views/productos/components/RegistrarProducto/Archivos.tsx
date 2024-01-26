import Dragger from "antd/es/upload/Dragger";
import { UploadProps, message } from "antd";
import { useRegistrarProducto } from "../../hooks/useRegistrarProducto";

export default function Archivos(){

    const { values,setValues } =  useRegistrarProducto();

    const props: UploadProps = {
        name: 'file',
        multiple: false,
        onRemove:(file) => {
            setValues((values) => ({...values,img:[]}))
        },
        beforeUpload: (file) => {
            //Verificar que el fileList sea menos a 2
            if (values.img.length < 1) {
                //@ts-ignore
                setValues((values) => ({...values,img:[file]}))
            } else {
                message.error("Solo puedes subir 1 archivo en total");
            }
            //Deestructuramos el estado actual y añadimos el nuevo archivo
            return false;
        },
        listType:"picture",
        maxCount:2,
        fileList:values.img
    };

    return (
          <>
            <p>Foto del producto</p>
            <Dragger {...props} className="flex items-center text-center">
                {/* <MdOutlineFileDownload/> */}
                <p>Click o arrastra la imagen del producto</p>
                <span className="text-tiny">
                    Soporte para imagenes PNG,JPG,JPEG
                </span>
            </Dragger>
          </>
    );
}