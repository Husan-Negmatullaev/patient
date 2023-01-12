import React, { memo } from "react";
import StatusScreenItem from "components/StatusScreenItem";

export default memo(({ route }: any) => {
  const { img, status, thank, notify } = route?.params;
  return (
    <StatusScreenItem
      img={img}
      status={status}
      detail1={thank}
      detail2={notify}
    />
  );
});
