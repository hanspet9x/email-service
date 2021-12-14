export const respond401 = (res, errorMesssage) => {
  res.status(401).json({error: true, message: errorMesssage});
};
export const respond400 = (res, errorMesssage) => {
  res.status(400).json({error: true, message: errorMesssage});
};
export const respond404 = (res, errorMesssage) => {
  res.status(404).json({error: true, message: errorMesssage});
};
export const respond200 = (res, data) => {
  res.status(200).json({error: false, message: '', data});
};
export const respond202 = (res) => {
  res.status(202).json({error: false, message: 'processing..', data: {}});
};
