export const getClassNameWithCurrentStatus = status => {
  switch (status) {
    case 'Выполнена':
      return 'isCompleteStatus';
    case 'Открыта':
      return 'isOpenedStatus';
    case 'В работе':
        return 'inProgressStatus';
    case 'Закрыта':
      return 'isClosed';
    case 'Отложена':
      return 'isDelayedStatus';
    case 'Согласование договора':
      return 'inMatchingStatus';
    default:
      return ''
  }
};