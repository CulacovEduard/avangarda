import React from 'react';
import Button from 'react-bootstrap/Button';

class DownloadButton extends React.Component {
  downloadFile = () => {
    const { filePath, fileName } = this.props;

    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  render() {
    return (
      <Button onClick={this.downloadFile}>Скачать документ</Button>
    );
  }
}

export default DownloadButton;