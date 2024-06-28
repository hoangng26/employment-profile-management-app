import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Card, Image, Typography } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const EmployeeCardComponent: React.FC = () => {
  const navigate = useNavigate();

  const editBtnHandler: React.MouseEventHandler<HTMLSpanElement> = (event) => {
    event.stopPropagation();
    navigate('/edit');
  };

  const deleteBtnHandler: React.MouseEventHandler<HTMLSpanElement> = (event) => {
    event.stopPropagation();
    console.log('Deleted');
  };

  return (
    <Card
      style={{ width: 300 }}
      hoverable
      onClick={editBtnHandler}
      className="mx-auto"
      cover={
        <Image
          height={200}
          className="object-cover"
          loading="lazy"
          preview={false}
          alt="example"
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
      }
      actions={[
        <EditOutlined key="edit" onClick={editBtnHandler} />,
        <DeleteOutlined key="delete" className="hover:text-red-500" onClick={deleteBtnHandler} />,
      ]}
    >
      <Card.Meta
        title={
          <div className="">
            <span className="flex justify-between">
              <span className="font-semibold">Nguyen Van A</span>
              <span className="font-medium">5 years</span>
            </span>
            <span>Frontend Developer</span>
          </div>
        }
        description={
          <Typography.Paragraph ellipsis={{ rows: 2 }} className="text-inherit">
            This is the description lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ad optio cum.
            Nulla voluptates sunt quidem distinctio, adipisci in eius, architecto, doloremque et eveniet sequi ipsum
            unde inventore non necessitatibus!
          </Typography.Paragraph>
        }
      />
    </Card>
  );
};

export default EmployeeCardComponent;
