const Map = () => {
  return (
    <div className="w-full h-[300px] md:h-[400px] lg:h-[500px]">
      <iframe
        title="Google Map"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.3224867048802!2d-0.08365299999999999!3d51.5256447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ca55fd39f3d%3A0x85fd82cf3d59855!2s3rd%20Floor%2C%2086%20-%2090%20Paul%20St%2C%20London%20EC2A%204NE%2C%20UK!5e0!3m2!1sen!2s!4v1745850069052!5m2!1sen!2s"
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
