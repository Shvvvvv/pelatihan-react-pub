import React from 'react'
import './Main.css'
import {FaPlus, FaCompressArrowsAlt, FaExpandArrowsAlt, FaTrashAlt} from 'react-icons/fa'
import ButtonComponent from '../components/ButtonComponent'
import Card from '../components/Card'
import Galaxy from '../components/Galaxy'

const Main = () => {
  return (
    <main>
        <div style={{
            display: 'flex',
            gap: 10,
            margin: 'auto auto'
        }}>
            <Card>
                <h3>Tambah Galaxy</h3>
                <form>
                    <div>
                        <div>
                            <label>Id :</label>
                        </div>
                        <input type="text" />
                    </div>
                    <div>
                        <div>
                            <label>Nama Galaxy :</label>
                        </div>
                        <input type="text" />
                    </div>
                    <div>
                        <div>
                            <label>Diameter :</label>
                        </div>
                        <input type="text" />
                    </div>
                    <div style={{
                        display: 'flex',
                        gap: 5
                    }}>
                        <ButtonComponent><FaPlus/> Tambah Depan</ButtonComponent>
                        <ButtonComponent><FaPlus/> Tambah Belakang</ButtonComponent>
                    </div>
                </form>
            </Card>
            <Card>
            <h3>Edit/Hapus Berdasarkan ID</h3>
                <form>
                    <div>
                        <div>
                            <label>Id :</label>
                        </div>
                        <input type="text" />
                    </div>
                    <div>
                        <div>
                            <label>Nama Galaxy :</label>
                        </div>
                        <input type="text" />
                    </div>
                    <div>
                        <div>
                            <label>Diameter :</label>
                        </div>
                        <div style={{
                        display: 'flex',
                        gap: 5
                    }}>
                        <ButtonComponent><FaExpandArrowsAlt/> Perbesar</ButtonComponent>
                        <ButtonComponent><FaCompressArrowsAlt/> Perkecil</ButtonComponent>
                    </div>
                    </div>
                    <ButtonComponent><FaTrashAlt/> Hapus</ButtonComponent>
                </form>
            </Card>
            <Card>
            <h3>Edit/Hapus Berdasarkan ID</h3>
            <div style={{
                        display: 'flex',
                        gap: 5
                    }}>
                        <ButtonComponent><FaTrashAlt/> Hapus Depan</ButtonComponent>
                        <ButtonComponent><FaTrashAlt/> Hapus Belakang</ButtonComponent>
                    </div>
                    <div style={{
                        marginTop: 10
                    }}>
                    <ButtonComponent><FaTrashAlt/> Hapus Semua</ButtonComponent>
                    </div>
            </Card>
        </div>
    </main>
  )
}

export default Main