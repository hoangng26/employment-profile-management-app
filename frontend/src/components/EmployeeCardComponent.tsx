import { Employee } from '@/core/models/Employee';
import { useAppState } from '@/core/redux/action';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Avatar, Card, Image, Skeleton, Typography } from 'antd';
import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomCarousel from './CustomCarousel';

interface EmployeeCardComponentProps {
  employee: Employee;
}

const EmployeeCardComponent: React.FC<EmployeeCardComponentProps> = ({ employee }) => {
  const { photos } = useAppState();
  const navigate = useNavigate();
  const employeePhotos = useMemo(() => photos.filter((item) => item.userId === employee.id), [photos, employee]);

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
        <CustomCarousel>
          {employeePhotos.map((item) => (
            <Image
              key={`${employee.id}-img-${item.id}`}
              height={200}
              width={300}
              className="object-cover"
              preview={false}
              alt={`${employee.id}-${item.id}-alt`}
              src={item.url}
              placeholder={<Skeleton.Image className="w-full h-full object-cover" active />}
            />
          ))}
        </CustomCarousel>
      }
      actions={[
        <EditOutlined key="edit" onClick={editBtnHandler} />,
        <DeleteOutlined key="delete" className="hover:text-red-500" onClick={deleteBtnHandler} />,
      ]}
    >
      <Card.Meta
        title={
          <div className="">
            <span className="flex justify-between items-center">
              <span className="font-semibold">{employee.name}</span>
              <span className="font-medium text-xs">5 yrs</span>
            </span>
            <span>Frontend Developer</span>
          </div>
        }
        avatar={<Avatar src={employee.avatarUrl} alt={`${employee.id}-avt`} />}
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
