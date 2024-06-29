import { fallbackImgUrl } from '@/core/constants/fallback';
import { Employee } from '@/core/models/Employee';
import { useAppState } from '@/core/redux/action';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Card, Image, Skeleton, Typography } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomCarousel from './CustomCarousel';

interface EmployeeCardComponentProps {
  employee: Employee;
}

const EmployeeCardComponent: React.FC<EmployeeCardComponentProps> = ({ employee }) => {
  const { photos } = useAppState();
  const navigate = useNavigate();

  const editBtnHandler: React.MouseEventHandler<HTMLSpanElement> = (event) => {
    event.stopPropagation();
    navigate('/edit');
  };

  const deleteBtnHandler: React.MouseEventHandler<HTMLSpanElement> = (event) => {
    event.stopPropagation();
    console.log('Deleted');
  };

  const randomNumber = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  return (
    <Card
      style={{ width: 300 }}
      hoverable
      onClick={editBtnHandler}
      className="mx-auto"
      cover={
        <CustomCarousel>
          {Array.from(Array(4).keys()).map((_, index) => (
            <Image
              key={`${employee.id}-img-${index}`}
              height={300}
              width={300}
              className="object-cover"
              preview={false}
              alt={`${employee.id}-alt`}
              src={
                photos[randomNumber(photos.length - 1)] ? photos[randomNumber(photos.length - 1)].url : fallbackImgUrl
              }
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
