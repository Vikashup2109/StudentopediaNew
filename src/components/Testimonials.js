import React, { useEffect, useState } from "react";
import sanityClient from "../Client";
import imageUrlBuilder from "@sanity/image-url";
import { Carousel } from 'react-bootstrap';


const Testimonials = () => {
     const [testimonialData, setTestimonialData] = useState([]);
     useEffect(() => {
          const fetchData = async () => {
               const data = await sanityClient.fetch(`*[_type == "testimonials"]{name, designation, organization, testimonialText, image{asset->{url}}}`)
               // console.log(data)
               setTestimonialData(data)
          }
          fetchData()
          // console.log(testimonialData)
     }, []);
     // useEffect(() => { console.log(testimonialData) }, [testimonialData]);

     const builder = imageUrlBuilder(sanityClient);
     const urlFor = (source) => builder.image(source)

     return (
          <>
               <section className='w-full'>
                    <div className='w-11/12 md:w-9/12 mx-auto py-10'>
                         <div className='flex items-center'>
                              <span className='!text-primary text-center sm:!text-left w-full text-3xl font-bold'>Testimonials</span>
                         </div>
                         <div className='mx-auto py-2 space-y-16'>
                              <Carousel interval={3000} pause='hover' variant="dark">
                                   {testimonialData && testimonialData.map((testimonial) => {
                                        return (
                                             <Carousel.Item>
                                                  <>
                                                       <div class=" !bg-[#282828] w-full sm:w-3/4 md:w-4/5 lg:w-1/2 flex flex-col mx-auto my-16 shadow-md rounded-lg">
                                                            <div class="flex items-center p-4 ">
                                                                 <img src={urlFor(testimonial.image).url()} alt="Hello" className="w-36 sm:w-48 mr-8" />
                                                                 <div class="">
                                                                      <h3 class="text-xl font-bold leading-tight text-white mb-6">{testimonial.name}</h3>
                                                                      <p class="text-gray-200">{testimonial.designation}</p>
                                                                      <p class="text-gray-200 font-bold">{testimonial.organization}</p>
                                                                 </div>
                                                            </div>
                                                            <div class="px-8 pb-6 text-justify">
                                                                 <p class="text-gray-200 italic">{testimonial.testimonialText}</p>
                                                            </div>
                                                       </div>
                                                  </>
                                             </Carousel.Item>
                                        )
                                   })}
                              </Carousel>
                         </div>
                    </div>
               </section>
          </>
     )
}

export default Testimonials