export function Testimonials({Testimonial, name, responsability}) {
    return (
        <>
            <p className='text-xs text-center'>{Testimonial}</p>
            <div className='flex items-center flex-col'><p className='text-md'>{name}</p><p className='text-xs mt-1 text-gray-300'>{responsability}</p></div>
        </>
    )
}