export default function Footer() {
  
    const bg = {
        backgroundImage : "url('/images/footer_img.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: "cover"
    }
    
    return (
        <footer className="bg-gray-50" style={bg}>
          <div className="container mx-auto flex justify-center py-12">
              <div className="py-5">    
                  <p className="py-5 text-gray-400">Copyright ©2023 All rights reserved</p>
                  <p className="text-gray-400 text-center">Terms & Condition</p>
              </div>
          </div>
        </footer>
    )
}
