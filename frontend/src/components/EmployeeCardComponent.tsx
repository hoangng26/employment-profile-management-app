import { Employee } from '@/core/models/Employee';
import PositionResource from '@/core/models/PositionResource';
import TLImage from '@/core/models/TLImage';
import { FETCH_EMPLOYEES, useAppState } from '@/core/redux/action';
import { employeeService } from '@/core/services/EmployeeService';
import { getEmployeeYearExperience } from '@/core/utils';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Avatar, Card, Image, Skeleton, Typography } from 'antd';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CustomCarousel from './CustomCarousel';

interface EmployeeCardComponentProps {
  employee: Employee;
}

dayjs.extend(relativeTime);

const EmployeeCardComponent: React.FC<EmployeeCardComponentProps> = ({ employee }) => {
  const { positionResource } = useAppState();

  const [photos, setPhotos] = useState<TLImage[]>([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const employeePhotos = useMemo(() => photos, [photos, employee]);
  const [displayPosition, setDisplayPosition] = useState<PositionResource>();
  const [exp, setExp] = useState(0);

  const editBtnHandler: React.MouseEventHandler<HTMLSpanElement> = (event) => {
    event.stopPropagation();
    navigate(`/edit/${employee.id}`);
  };

  const deleteBtnHandler: React.MouseEventHandler<HTMLSpanElement> = async (event) => {
    event.stopPropagation();
    await employeeService.deleteEmployee(employee.id!);
    dispatch(FETCH_EMPLOYEES());
  };

  useEffect(() => {
    const checkPR = positionResource[employee.positions[0].positionResourceId];
    if (checkPR) {
      setDisplayPosition(checkPR);
    }
  }, [positionResource]);

  useEffect(() => {
    setExp(getEmployeeYearExperience(employee));
  }, []);

  useEffect(() => {
    function getAllEmployeeImage(positions: any) {
      return positions.flatMap((item: any) => item.toolLanguages).flatMap((item: any) => item.images);
    }

    async function getEmployee() {
      const { data } = await employeeService.getEmployee(employee.id!);
      const { positions } = data;
      const images = getAllEmployeeImage(positions);
      setPhotos(images);
    }

    getEmployee();
  }, []);

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
              src={item.cdnUrl}
              placeholder={<Skeleton.Image className="w-full h-full object-cover" active />}
            />
          ))}
          {!employeePhotos.length && <Skeleton.Image className="w-full h-52 object-cover flex items-center" active />}
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
              <span className="font-medium text-xs">{Math.ceil(exp)} yrs</span>
            </span>
            <span>{displayPosition ? displayPosition.name : ''}</span>
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
