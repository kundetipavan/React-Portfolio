import React, { useState } from "react";

     const Contact = () => {
       const [formData, setFormData] = useState({
         name: "",
         email: "",
         project: "",
         message: "",
       });
       const [isLoading, setIsLoading] = useState(false);

       const handleChange = (e) => {
         const { name, value } = e.target;
         setFormData((prev) => ({ ...prev, [name]: value }));
       };

       const handleSubmit = async () => {
         if (!formData.name || !formData.email || !formData.project || !formData.message) {
           alert("Please fill in all fields.");
           return;
         }

         setIsLoading(true);

         try {
           const url = `https://react-back-865b.onrender.com/contact`;
           console.log("Fetching URL:", url);
           console.log("Request Body:", formData);

           const response = await fetch(url, {
             method: "POST",
             headers: { "Content-Type": "application/json" },
             body: JSON.stringify(formData),
           });

           console.log("Response Status:", response.status);
           const responseText = await response.text();
           console.log("Raw Response:", responseText);

           let result;
           try {
             result = JSON.parse(responseText);
           } catch (parseError) {
             console.error("Failed to parse response as JSON:", parseError);
             throw new Error("Invalid response format from server");
           }

           if (!response.ok) {
             throw new Error(result.message || "Server error");
           }

           setTimeout(() => {
             alert(result.message || "Message sent successfully!");
             setFormData({ name: "", email: "", project: "", message: "" });
             setIsLoading(false);
           }, 2000);
         } catch (error) {
           console.error("Fetch Error:", error.message);
           alert(error.message || "Failed to send message. Please try again.");
           setIsLoading(false);
         }
       };

       return (
         <section className="contact section" id="contact">
           <h2 className="section__title">Contact Me</h2>
           <span className="section__subtitle">Get in touch</span>

           <div className="contact__container">
             <div className="contact__info">
               <div className="contact__card">
                 <i className="fa-solid fa-envelope"></i>
                 <div>
                   <h3 className="contact__card-title">Email</h3>
                   <span className="contact__card-data">pavankundeti2004@gmail.com</span>
                 </div>
               </div>

               <div className="contact__card">
                 <i className="fa-brands fa-github"></i>
                 <div>
                   <h3 className="contact__card-title">Github</h3>
                   <a
                     href="https://github.com/kundetipavan"
                     className="contact__card-data"
                     target="_blank"
                     rel="noopener noreferrer"
                   >
                     https://github.com/kundetipavan
                   </a>
                 </div>
               </div>
             </div>

             <div className="contact__form">
               <div className="contact__form-group">
                 <input
                   type="text"
                   placeholder="Name"
                   id="name"
                   name="name"
                   className="contact__input"
                   value={formData.name}
                   onChange={handleChange}
                   required
                 />
                 <input
                   type="email"
                   placeholder="Email"
                   id="email"
                   name="email"
                   className="contact__input"
                   value={formData.email}
                   onChange={handleChange}
                   required
                 />
               </div>
               <input
                 type="text"
                 placeholder="Project"
                 id="project"
                 name="project"
                 className="contact__input"
                 value={formData.project}
                 onChange={handleChange}
                 required
               />
               <textarea
                 placeholder="Message"
                 name="message"
                 className="contact__input contact__textarea"
                 id="message"
                 value={formData.message}
                 onChange={handleChange}
                 required
               ></textarea>
               <button
                 className="button"
                 type="button"
                 id="submit-button"
                 onClick={handleSubmit}
                 disabled={isLoading}
               >
                 Send Message <span className="send__icon">≫</span>
               </button>
               <div className="loader" style={{ display: isLoading ? "block" : "none ",   }}>
                 ⏳ Sending....
               </div>
             </div>
           </div>
         </section>
       );
     };

     export default Contact;