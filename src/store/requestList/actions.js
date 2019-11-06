export const CREATE_REQUEST = 'CREATE_REQUEST';
export const CLOSE_REQUEST_MODAL = 'CLOSE_REQUEST_MODAL';

export const handleCreateRequest = () => ({
  type: CREATE_REQUEST,
});

export const closeRequestModal = () => ({
  type: CLOSE_REQUEST_MODAL,
});
