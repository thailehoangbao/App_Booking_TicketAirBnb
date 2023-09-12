import React from 'react';
import "../../css/DetailCss.css";
import { useDispatch } from 'react-redux';
import { actModalDetailSuccess } from './duckModal/actModal';

export default function ModalBtn() {
    const dispatch = useDispatch();
    return (
        <div className='pt-20'>
            <div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog">
                    <div className="card">
                        <div className="card-img">
                            <img src="https://i.imgur.com/4niebFr.jpg" className='ml-24'/>
                        </div>
                        <div className="card-title text-center">
                            <p>Success!</p>
                        </div>
                        <div className="card-text">
                            <p>Yay! It's a nice order! <br />It will arrive soon.</p>
                        </div>
                        <button className="btn" onClick={() => {
                            dispatch(actModalDetailSuccess(false));
                        }}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
