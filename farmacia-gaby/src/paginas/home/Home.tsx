import React from 'react'
import NavBar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

function Home() {
    return (
        <>
         <div className="bg-white flex flex-col justify-center items-center">
                <div className='container grid grid-cols-2 text-gray-800 p-16'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>Bem vindo</h2>
                        <p className='text-xl'>Olhe nossos produtos</p>
                    </div>

                    <div className="flex justify-center">
                        <img src='https://omunicipioblumenau.com.br/wp-content/uploads/2018/02/farmacia-remedios-medicamentos.jpg' alt="" className='object-fill' />

                    </div>
                </div>
                <div className='container grid grid-cols-2  text-gray-800 p-16'>
                <div className="flex justify-center">
                        <img src='https://www.contec.org.br/wp-content/uploads/2022/05/remedios-covid-960x540-1.jpg'  alt="" className='object-contain' />

                    </div>

                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>a</h2>
                        <p className='text-xl'>a</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home