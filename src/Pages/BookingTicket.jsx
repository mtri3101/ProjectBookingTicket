import React, { Fragment } from 'react'
import '../Assets/index.css'
import danhSachGheData from '../Data/danhSachGhe.json'
import { useDispatch, useSelector } from 'react-redux'
import { datGheAction, huyGheAction } from '../Redux/datVeReducer';


export default function BookingTicket() {

    const danhSachGheChon = useSelector(state => state.DatVeReducer);
    const dispatch = useDispatch();

    const renderDanhSachGhe = (data) => {
        return data.danhSachGhe.map((item, index) => {

            let cssGheDaDat = '';
            let disable = false
            if (item.daDat) {
                cssGheDaDat = 'gheDuocChon'
                disable = true
            }

            let cssGheDangChon = '';
            let gheDangChon = danhSachGheChon.danhSachGheDangDat.findIndex(ghe => ghe.soGhe === item.soGhe)
            if (gheDangChon !== -1) {
                cssGheDangChon = 'gheDangChon'
            }

            return (<button className={`ghe ${cssGheDaDat} ${cssGheDangChon}`} style={{ marginLeft: '30px' }} key={index} onClick={() => {
                const action = datGheAction(item);
                dispatch(action)
            }}>
                {item.soGhe}
            </button>

            )
        })
    }

    const renderSoGhe = (data) => {
        return data.danhSachGhe.map((item, index) => {
            return (<span key={index} style={{ marginRight: '55px' }}>{item.soGhe}</span>)
        })
    }

    return (
        <div style={{  width: '100%', height: '100vw', backgroundImage: "url('./img/bgmovie.jpg')", backgroundSize: 'cover', backgroundPosition:'center' }}>
            <div style={{  width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)' }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8 text-center">
                            <h1 className='text-warning'>Đặt vé xem phim</h1>
                            <div className='d-flex justify-content-center m-5'>
                                <div className="screen">
                                    <h4>Màn hình</h4>
                                </div>
                            </div>
                            <div className='text-light ms-5'>
                                {danhSachGheData.map((item, index) => {
                                    if (item.hang === '') {
                                        return <div key={index} className='rowNumber' style={{marginLeft:'5%'}} >
                                            {item.hang} {renderSoGhe(item)}
                                        </div>
                                    } else {
                                        return <div key={index} className="text-start mt-2 fs-4" style={{ margin: 'auto' }}>
                                            {item.hang} {renderDanhSachGhe(item)}
                                        </div>
                                    }
                                })}
                            </div>


                        </div>
                        <div className="col-4 text-center">
                            <h1 className='text-light mt-4'>Danh sách ghế bạn chọn</h1>
                            <div className='mt-4'>
                                <div className='text-light d-flex '>
                                    <button className='btn btn-warning me-3'></button>
                                    <span className='fs-5'>Ghế đã đặt</span>
                                </div>
                                <div className='text-light d-flex my-3'>
                                    <button className='btn btn-success me-3'></button>
                                    <span className='fs-5'>Ghế đang chọn</span>
                                </div>
                                <div className='text-light d-flex '>
                                    <button className='btn btn-light me-3'></button>
                                    <span className='fs-5'>Ghế chưa đặt</span>
                                </div>
                            </div>
                            .<div className="table-responsive">
                                <table className="table text-light" border="{2}">
                                    <thead>
                                        <tr className="fs-5">
                                            <th>Số ghế</th>
                                            <th>Giá</th>
                                            <th>Hủy</th>
                                        </tr>
                                    </thead>
                                    <tbody className='text-warning'>
                                        {danhSachGheChon.danhSachGheDangDat.map((item, index) => {
                                            return <tr key={index}>
                                                <td>{item.soGhe}</td>
                                                <td>{item.gia.toLocaleString()}</td>
                                                <td><button className='btn btn-danger' onClick={()=>{
                                                    const action = huyGheAction(item);
                                                    dispatch(action)
                                                }}>X</button></td>
                                            </tr>
                                        })}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td></td>
                                            <td>Tổng tiền</td>
                                            <td>{danhSachGheChon.danhSachGheDangDat.reduce((tongTien,gheDat,index)=>{
                                                return tongTien += gheDat.gia
                                            },0).toLocaleString()}</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
