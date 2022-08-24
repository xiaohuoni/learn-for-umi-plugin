import { IApi } from "umi";
import { join } from "path";

export default (api: IApi) => {
  api.onStart(() => {
    console.log("Juejin Plugin");
  });

  api.addLayouts(() => {
    return [
      {
        id: "juejin-layout",
        file: join(__dirname, "Layout.tsx"),
      },
    ];
  });
};
