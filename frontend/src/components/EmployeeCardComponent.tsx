import { Employee } from '@/core/models/Employee';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Card, Image, Typography } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface EmployeeCardComponentProps {
  employee: Employee;
}

const EmployeeCardComponent: React.FC<EmployeeCardComponentProps> = ({ employee }) => {
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
          src={employee.avatarUrl}
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
              <span className="font-semibold">{employee.name}</span>
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
