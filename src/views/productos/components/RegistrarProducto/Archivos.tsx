import { MdOutlineFileDownload } from "react-icons/md";
import Dragger from "antd/es/upload/Dragger";
import { UploadProps, message } from "antd";

export default function Archivos(){
    const props: UploadProps = {
  name: 'file',
  multiple: true,
  action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

    return (
          <Dragger {...props}>
            <p ><MdOutlineFileDownload/></p>
            <p>Click or drag file to this area to upload</p>
            <p>
                Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                banned files.
            </p>
        </Dragger>
    );
}