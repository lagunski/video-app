import React, {useState} from 'react';
import {Button, Form, FormGroup, Input} from 'reactstrap';
import {addVideoToLocalStorage} from "../../utils/localStorage.utils";
import {useDispatch} from "react-redux";
import idFinder, {getVideoServiceInfo} from "../../utils/idFinder";
import {loadVideoInfoTC} from "../../videosReducer";

//TODO remove any
export const AddVideo = () => {
    const dispatch = useDispatch();
    const [searchData, setSearchData] = useState('');
    const handleSubmit = (e: any) => {
        const video = getVideoServiceInfo(searchData);

        e.preventDefault();
        addVideoToLocalStorage(video);
        setSearchData('');
        dispatch(loadVideoInfoTC(video));
    }

    const onChangeHandler = (e: any) => {
        setSearchData(e.target.value);
    }


    return (
        <Form className="d-flex" onSubmit={handleSubmit}>
            <FormGroup>
                <Input type='text' value={searchData} onChange={onChangeHandler}/>
            </FormGroup>
            <Button onClick={handleSubmit}>Add</Button>
        </Form>
    );
}


