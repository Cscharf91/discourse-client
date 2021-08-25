interface DomainObject {
  baseUrl: string; 
}

const DomainInfo: DomainObject = {
  baseUrl:
    process.env.NODE_ENV === "production"
      ? "https://discoursedebate.com"
      : "http://localhost:5000",
};

export default DomainInfo;
