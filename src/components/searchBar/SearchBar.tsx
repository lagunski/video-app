import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { addVideoToLocalStorage } from '../../utils/localStorage.utils';
import { getVideoServiceInfo } from '../../utils/idFinder';
import { loadVideoInfoTC } from '../../store/videos/videosReducer';

//  TODO remove any
const AddVideo: React.FC = () => {
  const dispatch = useDispatch();
  const [searchData, setSearchData] = useState<string>('');
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const video = getVideoServiceInfo(searchData);

    e.preventDefault();
    addVideoToLocalStorage(video);
    setSearchData('');
    dispatch(loadVideoInfoTC(video));
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchData(e.target.value);
  };
  return (
    <Form className='d-flex'>
      <FormGroup>
        <Input type='text' value={searchData} onChange={onChangeHandler} />
      </FormGroup>
      <Button onClick={handleSubmit}>Add</Button>
    </Form>
  );
};

export default AddVideo;
