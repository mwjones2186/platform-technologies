import React from 'react'
import '../assets/css/App.css'
import '../assets/css/Footer.css'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit'

export default function Footer() {
    return (
        <MDBFooter className='text-center text-lg-start footer'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'></section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <MDBIcon color='secondary' icon='gem' className='me-3' />
                                Platform Technologies
                            </h6>
                            {/* <p>
                                An early-stage medical device company perfecting and commercializing autonomous, disposable and miniaturized devices for minimally invasive surgery
                            </p> */}
                        </MDBCol>

                        <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Links</h6>
                            <p>
                                <a href='/technology' className='text-reset'>
                                    Technology
                                </a>
                            </p>
                            <p>
                                <a href='/literature' className='text-reset'>
                                    Literature
                                </a>
                            </p>
                            <p>
                                <a href='/aboutus' className='text-reset'>
                                    Who We Are
                                </a>
                            </p>
                            <p>
                                <a href='/contact' className='text-reset'>
                                    Contact Us
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>

                            <p>
                                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                                <a href='mailto:Sjones@platformtechnologies.net'>
                                    Sjones@platformtechnologies.net
                                </a>
                            </p>
                            <p>
                                <MDBIcon color='secondary' icon='phone' className='me-3' />
                                <a href='tel:(800)571-2222'>
                                    Office Number: (800)571-2222
                                </a>
                            </p>
                            <p>
                                <MDBIcon color='secondary' icon='print' className='me-3' />
                                <a target="_blank" href='https://maps.google.com/maps?q=4851+Tamiami+Trail+N+Suite+200,+Naples,+FL+34103'>
                                    Address: 4851 Tamiami Trail N Suite 200, Naples, FL 34103
                                </a>
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        </MDBFooter>
    )
}