export const parameters = {
    "id": "ggbApplet",
    "width":700,
    "height":550,
    "showMenuBar":false,
    "showAlgebraInput":false,
    "showToolBar":false,
    "customToolBar":"0 73 62 | 1 501 67 , 5 19 , 72 75 76 | 2 15 45 , 18 65 , 7 37 | 4 3 8 9 , 13 44 , 58 , 47 | 16 51 64 , 70 | 10 34 53 11 , 24  20 22 , 21 23 | 55 56 57 , 12 | 36 46 , 38 49  50 , 71  14  68 | 30 29 54 32 31 33 | 25 17 26 60 52 61 | 40 41 42 , 27 28 35 , 6",
    "showToolBarHelp":false,
    "showResetIcon":false,
    "enableLabelDrags":true,
    "enableShiftDragZoom":true,
    "enableRightClick":false,
    "errorDialogsActive":false,
    "useBrowserForJS":false,
    "allowStyleBar":false,
    "preventFocus":false,
    "showZoomButtons":true,
    "capturingThreshold":3,
    // add code here to run when the applet starts
    "appletOnLoad":function(api){
                                    
                                },
    "showFullscreenButton":false,
    "scale":1,
    "disableAutoScale":false,
    "allowUpscale":false,
    "clickToLoad":false,
    "appName":"classic",
    "showSuggestionButtons":true,
    "buttonRounding":0.7,
    "buttonShadows":false,
    "language":"en",
    "rounding":"3",
    // use this instead of ggbBase64 to load a material from geogebra.org
    //"material_id":"kNsYvNTd",
    // use this instead of ggbBase64 to load a .ggb file
    //"filename":"http://Users/Zeddzorrander/Documents/Sabbatical2020/functionImages1/GeoGebra/FunctionImages.ggb"
    "ggbBase64":"UEsDBBQACAgIAC1z7VAAAAAAAAAAAAAAAAAXAAAAZ2VvZ2VicmFfZGVmYXVsdHMyZC54bWztmltT4zYUgJ+7v0Kjp/aBxHLiXBjMDrsznTLDskxhdvqq2LKjIkuuJROHX7+ylNjOJqHEZJtA4QH5yLp+5+joSM7ZxyJh4IFkkgruQ9RxICA8ECHlsQ9zFZ2M4MfzD2cxETGZZBhEIkuw8qFXlqzqaanjjd0yD6epDwOGpaQBBCnDqqziQxFFjHICASgkPeXiGidEpjggt8GUJPhKBFiZtqZKpafd7mw26yx77Ygs7uqGZbeQYTeOVUenEOihc+nDxcOpbnel9qxn6rmOg7p/fbmy/ZxQLhXmgR6InlZIIpwzJfUjYSQhXAE1T4kPU0G5goDhCWE+vCkl8GuUEfIbBItKmpYDzz/8cianYgbE5G8S6DyV5aSqZ4RuWUa//iyYyEDmw+EQgtgmEx+6nqehsXSKfejYwgzPSQYeMKtycK5EYOqb3AgzSZZldU9fREjsm/6iPKeJwQmkIlofCAKZEhKaJztDZJQzN3putBcIkYUSFD68xtcQzBfpo01NEcPmlj4uuvSauWrOSGPkZ90F1ucBDklKeKgLrVBGrSgPRoZymUxs8poh93825ME75G2Q0e6Uv/ImW7cVW+R6Bq5J3x1Fg+4l/5PEesxNxr13xntlvGrB/VZ0HcPWeaVkTRHLUJb/dVQjkpSRYo/gbUS0gHhlhAq62y66aEJ3DoLcaY28xGHhqSkN7jmRsiRbt1s+/EFDvXuZ/oSOH6nSLaHhyLZA/uErKqNaY1SXeVoNUc4DZRzKAu3nPHto6qLXdw6hjbrNfSvjpaS3s5QkLqWKy+1Srg27XUD3/zZskStW9nzJlT50EWOucm1q94Skd7qpr/wuw1yWJ69VS9qutwzPn9KZ966z49PZ0m9df8NZpYlcB/eRHnvYVF+78GjrBt5xvUPrcAdvvpHIy0OaozLoHa11P2Y1aOcVXKe/GWNneMRm9aCnJ2oe3xZiHSO8x2u7u8gNQTbOFJEU8387srB53FjjN0u50sfQ6uPlY9z5UOn1jE49tGbfyLF/qD92EBog99BqfhrwyvHkpsqoEaMDIT7SRbOdZiB4eR2+PF5YqeLYf2OuYw/nOBoTbj2uBKBwTLG5Yyo/OosPFQUy8hyZt4/IZpv6euAZLcCFrXFhC164NunZpG8TrwLU7vBoVJtqr9UIn3/YGvrtTjyvyZG8SaX/ByE8zxOSNVzD9VKujMezzkG3l5MV1T7DFWyzk+1WIRkNtQklVCvpRGsvwYXRIp5IwXJFboOMEF5/rbNmPKOhmpaBne47okVpLvbFVGT0UXBVwQDlIrhg5rPeygXHJutxn4pfV2z1Zd4Z85jVi/HCSrUC7P29KfTj1d4mvTQROguCg4476qGR13OGaDj2RoNnEkWj1kTXzQM5ezCQnZa5u2mZ4yyo7017zma/43QcNOx7PXfsemg87usHb/8nw9+rjPpMc4wXfcYC1or+tDs8JoJc1vfSVqoIjd5YtILzgjKKs/nLbH0nwooUdbxwZ4TGzwqOEPD2qWjscT20Sys1vt7byURUU+Q40RVsJ5R/wsF9nImch+u70F6mjg5tW9uhTYRgBNeO6NNSbnw1Xtv3twGy+QddfcGUBPcTUazsVU/7GCrrFXBlhMbX3A0r4PmzXN/nTg5uCm1u6LZ9ZNwYiTRJdxu/a+ouf0R1/h1QSwcIGlRUv+AEAADsJQAAUEsDBBQACAgIAC1z7VAAAAAAAAAAAAAAAAAXAAAAZ2VvZ2VicmFfZGVmYXVsdHMzZC54bWztmM1S2zAQgM/lKTS6E1uOHTCDYTL00M4AQ4dLr0LeJGptyUgKiXm1vkOfqfoxweFvSobSgTaHrP52JX2rrLTZP1zWFboCpbkUBSaDGCMQTJZcTAs8N5PtXXx4sLU/BTmFC0XRRKqamgJnbuRKz9YGWZ64Nto0BWYV1ZozjJqKGqdSYDmZVFwARmip+Z6Qp7QG3VAG52wGNT2WjBpva2ZMsxdFi8VicDPrQKppZA3raKnLaDo1AysxsksXusBdYc/aXdNeDL1eEsck+npyHObZ5kIbKphdiN1WCRM6r4y2RaigBmGQaRuwG5CCs6Gdo6IXUBX4szB2r8DcEhGbqyur3ykXeEiyGB9sfdjXM7lA8uKbHVdgo+aw0veVyI2x3UeykgqpAidZhpHlTJIdjC4K7PBVzYza0oDE4UPSPCZkRJKgXtEWFLqilRvtW+jcSOYt+tYJrTTcjLVzn8gSQk/ajRe89qiRNmB9RTDSDUDpS2H3sXdc689A357137lpK0Bmxtl3AdrSz3pKrvCJlyW4oxR0gE9BXFkgUmnr+tjP0sZ++HXcnbgl8fWW+N5rEpq9vl2q4ks0DhrjMHCcBDEMIg0iWyGBSxHWqd13gRuq7Gmzhpjr3486X9/zOl1y3XP62FU/rjk6Hm7k6Ni7Ob7r5Dfq0sfpoq4Mds8/fzwN2/+KGFUGNKeih/3IddzlPvrXuT8O0toX0ON35utr/GwM3IhfnnuACck9Qi9XESp7KYxMSlVqtAxBIIQG/71YmZxQdyN1swzIExDjDSHKqp1BqaS45dhrukU57FBu8st5Ln6SDT3/jNy7HtLuesjyUZyO0hfzxaZH+llkx4rNeA0l0HW09pJ7LbQJIR5tGm5eJ94H27PWRmBernN9vSPrQ4RdfB64Ju/mzJ4prut1quQVqY5CIA5U89GbpCrArPZ56sr9qJr9j6rPYXk5p6V/cXVb/XJT7zMlm2Ulcfrws2mw82JA/kQq8WAi4RpDttAGcZ2sDD43t0DjURA7QewGkT+ad/C6qTjj5mlX6rma2Dz4oadw17Xu1fRvefXW8Ks8h8nvvuSiXhof3fxncPALUEsHCE1XMtwuAwAA2xAAAFBLAwQUAAgICAAtc+1QAAAAAAAAAAAAAAAAFgAAAGdlb2dlYnJhX2phdmFzY3JpcHQuanNLK81LLsnMz1NIT0/yz/PMyyzR0FSoruUCAFBLBwhFzN5dGgAAABgAAABQSwMEFAAICAgALXPtUAAAAAAAAAAAAAAAAAwAAABnZW9nZWJyYS54bWzNWltv28gVfs7+ioGwKJJWpuZ+SeUsnPShBZLtom6LokUfRtRIYkORgkjZcpCH/sP+pZ6ZISnJTBxxs43qhCI5PHNmzu07H2VPf9ivc3TntlVWFtcjkuARckVazrNieT3a1YsrPfrh1XfTpSuXbra1aFFu17a+Hgkv2c2Du0QY6sfsZnM9SnNbVVk6Qpvc1n7K9ahcLPKscCOUzeG5lRLPU3nFhSRXXHF7NZMzcjWjC2ul5alMQRLtq+xlUf5o167a2NTdpiu3tm/L1NZh1VVdb15OJvf390m7v6TcLiewhWqyr+aT5XKWwHmEwMiiuh41Fy9B78nsexbmUYzJ5G/v3sZ1rrKiqm3hN+IdsMteffdsep8V8/Ie3WfzenU9MgoMXrlsuQKPcC1GaOKFNuCWjUvr7M5VMPXoNhhfrzejIGYL//xZvEJ5Z9cIzbO7bO621yNwKxVKMWKEVpJqrUao3GauqBtZ0qw5abVN7zJ3H9X6q7Aixwbm3WVVNsvd9Whh88oHolhswbXdfVU/5G5mYdV6u4P7w4bIOPwDkeyD8+rA7OgJeEbGnLGxwngsBI67OVpaEDpCdVnmQTFGHxFBAsOBiEFjJBWMUEQE4jCiYUQh5scE4YghL0IY4hzO3A8T6Z8JmC8wIgSGEcWIUkQJogxuhUBCIqH8RAqy0gRlGA4vDduBg/kxxuAIY4zDQf0VKBJRDWxCMBmuhJcG/YL67YdBphE3sJAfEIogBnuAe4URaGRePQlGcIz8f4K4V08VohqBPrDba8Z0SFCagUdRaWMiTmICwfCHhCME61FQBq37OBnYGLeLUi0Pi+IxZZ9dUR8lAeyMeA9hTOOJIfQxXIh4z5tbGW9D3DGEMI5q/2H8jZRI6nDxlX5krUFsiBfJ0arRSQMW7ZaE3Dx/SX5aS1A6GJJy7E8knnyegV/CIxzHMIsnGk88nkSU4XE6j6IxTTGPMpwNsLCHGa2BQzz6lYFsl1SUHxYVAEz+fzh6S7KvqoVuRSLwuSvKkyB+69UJ1b+Mj7k+e03fJT+RtvFMmvO3icN00rbHabMjVK28bJPetVtXfo/MIMWQpF2/kr6jNE1LUaQEUvKodY1985Li0L9899In/UvooyYGHUz6QRU6IqznW1BsaJS3PW3cdLWPva4GTYgf+hBs0KsiCEHTDJDYNiTYBe1aEhW+K1EATeiGFEkPwp/pTkDcyirrfLty+aaLQnBjVmx29Ynr0vW8vaxLkLZ5IGSN/LxM37/unN1ocraqj9UCiTlQpUhqTpjUs2luZw5Y5PLWZwJCdzb3JRRWWJRFjdoskKOgLpC2qduleTbPbPFXCH3LkH7crWdui8Jl6Y0MSvx01LK7gMwduwOgCCJpWW7ntw8VZAra/91tYTJXCROKEkaIEkITKPCH+IRik3Bz9OMTNbU+xyVJlFFCA8pqTqkS4PSH5hlRPBGadT9UxrXd3a2ra7C/Qnbvqtbfy62vssaP/uYP1esyPwxtyqyo39hNvdsGWg+wvvVW3RTL3AVXhigD603fz8r9beztMur688PGN8a4gdnyTZmXWwQlSAXQ3WVznsVzkPE766RwkMFBogmUV9o9J4YGiXCexXOQ8u8KMcrRUtKaidtVsgrF+5M0DBniKfSuyOq37U2dpe8Phnr5GP/WhacqyS+kcjp5lHrTarN1dl6tnKvbZDxJOaLpIeWY1nFjMGnxxuX57bHo8asHtLuYvgf14OHdumg9dJjzhBw5U46eKcfOlONnyokz5eSZcupMOX2mnOnLudyDV1kgtLpNt2Wex45/dJ2G+dejK/D+1ufcFYmp00uVaYOobeKsy7mLCEhaZMpzu6nc/AgXp5OTWdP3blu4PEoXgCS7cldF8YgVQdGucj/ZenVTzP/klrD7n6xvwzXkdhQ9lMzcpdkaJsbxpnSth5W/QK3E0blbbl1bYnEzsbCbXaIjS7vyjih7LBaMabc/rS0QhUAw1pn3HuTk2u5DbgIybxqfTKt0m208YKIZkIX37oCJ86zyKuZHhnuXVGBbjFid1b62R8ju6lW5DW/ltvYjvqXsYc+V/+6jRYcFtLO9b5LP9y/QNfShAi4AJQJ6LnZFUBpWgZxYw/v740cHRSFzAE9QOfsXpM8jGIo37s7XTXAVSH0GbpHNNyvb+TS3D77jHfXMoPKPi0XlagTOI1CxDz4Djx+/69Ks6QGLbN+m2CERDnBdrwAYC3BOKLBoJI4Xv8/mc1cc8hU6kvdgUPX9c++571/EQNjqnd2EjlfU2wf03sG2fue22Z31VOAf0bvj/Zj8cxSnp2Xl/R2SpJ0N8Btd3XN6sVuDsrTzqQ0+B0U7d+Kfkyi0VLgJ06FczghAAm894YdwgwmRhD4ZknePS7vK/ddBMddxk+oyoZoRLRggh51VgCO1A2Bxrjh8QxaTpUEl6kkwTBQ8hJkDToZYtmKQ5dkHQIUusqGr3cSS/WKwCX462rYApAjxjgX6n3+jCfJfDgHBc7H7dNM34JfAVA61eRzLXvHdNMX33I7R4rl90RVeYD6RW55mQPOgm3/pmiNPRT+AYeWlcRCGzw/dw2BJYAZhijwe7eHnU06sAbedd0pwZXMX0ez54lcWXgh+C65Fv0bP9+gKgZPRb4KzP+XeHqq1yr/CzxTzn+HpgzPxUPgSn01oVG5smtU+bkp/2bOzxqcWPIYT8SmHPUakWQ+RkoZeVw/rWZln6ZEJ6Otg6Au1RZrd4090r8fbBuHBSHqIwjcA0iMUOgd2YMJun+WZhSZ0kjJP++x1i0ezMWoLaTYYlV5fDpVUwBlKz0Qln9MPzfl/gEw3tPHnDYEK6hrHGelI+2VEJVHGMK3gE5LofNd9LvV+VobcsNYkOtAk9glkoEwYMEjAJzXtW+M3N4m3JrGBJvG+SQp4jdFEMmYU55pdyCTRmsQHmiQem0QSzBUxECNCjBRGyQuZJFuTxECTZN8khrUxEorJGKG4upBFqrVIDrRI9S0SCisjGZXKcA0XFzJJtyapgSbpvkmaUQHhIVwYjrm4VJRMa5IeaJJ5bBJNsOHMCIIpM/4345eKkn/liTaZgTbBzJ5RTEhiuN+XoYyLS9lEul6LhxrVI380edRsL9VtyYFBDKUQpMchaKKVUQZAQiiD5eWM6jgEGUoiSI9FsIRwIgzYxIT21l2qP5GORpChPIL0iARLOAYK4X+/zbQG1LiUUR2RIEOZBOlRCZZIKQjUEzVEa2zopSCddFyCDCUTpMcmWALJZwwG0gdclnJ6sVh1fIIMJRSkxyh4AiEClIAMVFoyQy5lVMcoyFBKQXqcgidcYEAJgAuhheD4Ys2qIxVkKKsgPVrBE0WoRwmNmebSXMgm2pEKMpRV0B6r4Am8PkEGMqmJZppdzKiOVdChrIL2WIVI/j/ed2lHKujg7yV6pEIk3CilgaYzpSlhl8J0evhiYiipoD1SIRIFrx4aOAURmvi/FvwGRk2Of40X/gqk+dvgV/8FUEsHCLfqeKU2CgAA7SwAAFBLAQIUABQACAgIAC1z7VAaVFS/4AQAAOwlAAAXAAAAAAAAAAAAAAAAAAAAAABnZW9nZWJyYV9kZWZhdWx0czJkLnhtbFBLAQIUABQACAgIAC1z7VBNVzLcLgMAANsQAAAXAAAAAAAAAAAAAAAAACUFAABnZW9nZWJyYV9kZWZhdWx0czNkLnhtbFBLAQIUABQACAgIAC1z7VBFzN5dGgAAABgAAAAWAAAAAAAAAAAAAAAAAJgIAABnZW9nZWJyYV9qYXZhc2NyaXB0LmpzUEsBAhQAFAAICAgALXPtULfqeKU2CgAA7SwAAAwAAAAAAAAAAAAAAAAA9ggAAGdlb2dlYnJhLnhtbFBLBQYAAAAABAAEAAgBAABmEwAAAAA=",
    
};
    // is3D=is 3D applet using 3D view, AV=Algebra View, SV=Spreadsheet View, CV=CAS View, EV2=Graphics View 2, CP=Construction Protocol, PC=Probability Calculator DA=Data Analysis, FI=Function Inspector, macro=Macros
export const views = {'is3D': 0,'AV': 0,'SV': 0,'CV': 0,'EV2': 0,'CP': 0,'PC': 0,'DA': 0,'FI': 0,'macro': 0};

// export function ggbFunctionf(x) {
//     return 0.05 * (x + 4) * (x - 1) * (x - 5);
// };

