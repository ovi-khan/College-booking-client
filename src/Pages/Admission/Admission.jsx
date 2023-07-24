import { useForm, Controller } from "react-hook-form";
import Swal from "sweetalert2";

const countryCodes = [
  { value: "+1", label: "+1 (USA)" },
  { value: "+44", label: "+44 (UK)" },
  { value: "+91", label: "+91 (India)" },
  // Add more country code options here
];

const Admission = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (data) => {
    // Combine country code and phone number
    const phoneNumber = data.countryCode + data.phoneNumber;
    // Use the combined phoneNumber in the submission data
    const formData = { ...data, phoneNumber };
    // Handle admission form submission with formData
    console.log(formData);
      // send data to the server
  fetch('https://college-booking-server-ovi-khan.vercel.app/admission', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
 .then(data => {
   console.log(data)
   if(data.insertedId){
     Swal.fire({
       title: 'Success!',
       text: 'User added successfully',
       icon: 'success',
       confirmButtonText: 'Done'
     })
   }
  })
  };

 


  return (
    <div className="bg-blue-500 w-[60%] py-10 px-10 mx-0 mx-auto mt-20 rounded-xl">
      <h2 className="text-center text-4xl font-bold mb-10 text-green-500">
        Admission form
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* College Selection */}
        <div className="mb-4">
          <label htmlFor="college">College Selection: </label>
          <select
            className="bg-green-700 px-4 py-2 rounded-lg w-full"
            {...register("college")}
            id="college"
          >
            <option value="college1">University of Knowledgeville</option>
            <option value="college2">Harmony University</option>
            <option value="college3">Tech Institute of Excellence</option>
            <option value="college4">Medical College of Excellence</option>
            <option value="college5">Business School of Success</option>
            <option value="college6">Art Academy of Creativity</option>
          </select>
        </div>

        {/* Subject Selection */}
        <div className="mb-4">
          <label htmlFor="subject">Subject Selection: </label>
          <select
            className="bg-green-700 px-4 py-2 rounded-lg w-full"
            {...register("subject")}
            id="subject"
          >
            <option value="math">Math</option>
            <option value="science">Science</option>
            <option value="history">History</option>
            <option value="english">English</option>
            <option value="computer">Computer Science</option>
            <option value="art">Art</option>
          </select>
        </div>

        {/* Candidate Name */}
        <div className="mb-4">
          <label htmlFor="name">Candidate Name: </label>
          <input
            className="bg-green-700 px-4 py-2 rounded-lg w-full"
            type="text"
            id="name"
            placeholder="Candidate Name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-red-700">Candidate is required</span>
          )}
        </div>

        {/* Candidate Email */}
        <div className="mb-4">
          <label htmlFor="email">Candidate Email: </label>
          <input
            className="bg-green-700 px-4 py-2 rounded-lg w-full"
            type="email"
            id="email"
            placeholder="Candidate Email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-700">Candidate Email is required</span>
          )}
        </div>

        {/* Phone Number and Country Code */}
        <div className="mb-4">
          <label htmlFor="phone">Phone Number: </label>
          <div className="flex items-center">
            <Controller
              name="countryCode"
              control={control}
              defaultValue={countryCodes[0].value}
              render={({ field }) => (
                <select {...field} className="bg-green-700 px-4 py-2 rounded-lg">
                  {countryCodes.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              )}
            />
            <Controller
              name="phoneNumber"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  {...field}
                  className="bg-green-700 px-4 py-2 rounded-lg ml-2 w-full"
                  type="tel"
                  placeholder="Phone Number"
                />
              )}
            />
          </div>
          {errors.phoneNumber && (
            <span className="text-red-700">Phone Number is required</span>
          )}
        </div>

        {/* Date */}
        <div className="mb-4">
          <label htmlFor="date">Date: </label>
          <input
            className="bg-green-700 px-4 py-2 rounded-lg w-full"
            type="date"
            id="date"
            {...register("date", { required: true })}
          />
          {errors.date && (
            <span className="text-red-700">Date is required</span>
          )}
        </div>

        {/* Address */}
        <div className="mb-4">
          <label htmlFor="address">Address: </label>
          <textarea
            className="bg-green-700 px-4 py-2 rounded-lg w-full"
            id="address"
            placeholder="Address"
            {...register("address", { required: true })}
          />
          {errors.address && (
            <span className="text-red-700">Address is required</span>
          )}
        </div>

        {/* Image */}
        <div className="mb-4">
          <label htmlFor="image">Image: </label>
          <input
            className="bg-green-700 px-4 py-2 rounded-lg w-full"
            type="url"
            id="image"
            {...register("image", { required: true })}
          />
          {errors.image && (
            <span className="text-red-700">Image is required</span>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            className="bg-red-700 px-10 py-2 rounded-lg mt-2 text-white"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Admission;
