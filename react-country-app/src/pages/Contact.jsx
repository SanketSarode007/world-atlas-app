export const Contact = () => {

   const handleFormSubmit = (formData) => {
      //console.log(formData.entries());
      //* this data can be sent to backend to process
      const fromInputData = Object.fromEntries(formData.entries());
      console.log(fromInputData);
   }

   return(
      <>
        <section className="section-contact">
         <h2 className="container-title">Contact Us</h2>
         <div className="contact-wrapper container">
         <form action={handleFormSubmit} >
            <input 
            className="form-control"
            type="text"
            autoComplete="off"
            placeholder="Enter your name"
            name="username"
            required
            />
            <input 
            className="form-control"
            type="email"
            autoComplete="off"
            placeholder="Enter your email"
            name="email"
            required
            />
            <textarea
            className="form-control" 
            rows="10"
            placeholder="Enter your message"
            autoComplete="off"
            name="message" 
            id=""
            ></textarea>

            <button type="submit" >Send</button>
         </form>
         </div>

         
         
        </section>
      </>
   )
}