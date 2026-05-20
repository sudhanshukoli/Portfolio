

export default function GmailModal({ setMailModal, formData, setFormData }){

    
  const openGmail = () => {

    const body = `
        Name: ${formData.name}

        Email: ${formData.email}

        Message: ${formData.message}
        `;

        const gmailUrl =
        `https://mail.google.com/mail/?view=cm&fs=1` +
        `&to=kolisudhanshu@gmail.com` +
        `&su=${encodeURIComponent(formData.subject)}` +
        `&body=${encodeURIComponent(body)}`;

        window.open(gmailUrl, "_blank");

        setMailModal(false);
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
        })
    };

    return(<>
        <section className="fixed inset-0 flex items-center justify-center bg-black/60">
            <div className="bg-[#111] text-white p-6 rounded-xl border border-purple-500 w-[350px]">

            <h2 className="mb-3 text-xl">
              Ready to send?
            </h2>

            <p className="mb-5 text-gray-400">
              Open Gmail with filled details.
            </p>

            <div className="flex justify-between">

              <button onClick={openGmail} className="px-4 py-2 bg-purple-700 rounded" >
                Open
              </button>

              <button onClick={() => setMailModal(false)} className="px-4 py-2 border border-gray-600 rounded" >
                Cancel
              </button>

            </div>

          </div>
        </section>
    </>)


}