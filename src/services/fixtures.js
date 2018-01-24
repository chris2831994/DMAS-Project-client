export default class Fixtures {

    users = {
        "homer@simpson.com" : {
            firstName: "Homer",
            lastName: "Simpson",
            userName: "elGrandeRicardo",
            description: "This is a profile description",
            email: "homer@simpson.com",
            password: "secret",
            profileImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAyCAIAAAClJN76AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QwTETULvpeljgAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAANJSURBVFjD7ZffShtBFMZnZnfdmARNoDQQ+yc10VqwjVChhWqU+ARC9LYXfahCX0Bv1CuxRFFBLVWSgjUaDQ01MVHBGOIqm83OzkwvpKHGZKPJbhXac7ews7/5vjl75hz48dMpuLtA4E6Db2CNJFFCQCqt2Wzo+Ji43VwuR10PkcfDm4jPZMnhIYlE1Nwpubhg11/wPOX7+1vcbu5RB2ckPn1AYjH1+xYuFCilNV/bT2npA83hQK9eCr29LU8ec83ii0X2I6ktLyuHR4SQ+hulFOTzdGW1lExqw8MWn5dvbYUNpl6xyCJRdWpaPsjciF0OQsBBhkxNy5GoWiyyRtQXi2x1rbS0XNI01lhWyzKb+6woCht4J9byoKb69Q11cUlpmH0ZmsYWl5T1DfV25kejanheuZXhOgcRnleiUfWmeEmi4YVmdVd4EF5QJIneCD87pxQK1NjqVijQ2TmlPj6TJYkEZsxYOmAMJBI4kyV18PE4lmWj4b9/hHgc18HHto2XXjYgtq2LlySaz1NgWuTztCIBr+LPGcbMPDzGTDpneuqpieIBpUBPvSF1pm4V0sEz8/HsHjVbV/D6d7MhUYG4gnc4TDejAnHlwelAFtFEAywidOrgBQE20K3ePDweXhBqmw8h6PMLyJwTQAj0+QUIdWu+z8e7XJwZeJeL8/n4OleO3Y5GghbDDUAIjAQtdjuqg0cIdHfxXq/BGeD18t1d/HVVVWSKIhwPWQ38BSwiHA9ZxWofrIKHELS1oWDQAo3YAIQgGLS0taGqX0O11gwFRG+nAUfg7eSHAmItJUhn12Mhq83WlAM2GxwLWXVc1EtxpxMFBsVm8IFB0elEjc94qVRTLUAqRfRnvJr4dFqbmpb3ErgZ/F4CT03L6bR2ixGTEPBzX5uZkXOntMmulxCwFcNHR2R01PrMw3NcPfWEgJ04npiUT3LUkI6bMXCSoxOT8k4cX2/m+D/7wLMzurJa+rquGjjgXcb5OZ2YlN++aRkcENvbUbn88Zcb3N3Dm5s4vosVhZk0ZmgaW/tSin5TX/QIfr/Q81yAEMD3Hw4jUZzNan+hzS0Hx4GODr7/tQDbHyRN7e31r0F0V+zLbLtPjfZ//H/8P4P/BaUljmJ8GjTRAAAAAElFTkSuQmCC",
            follows: []
        },
        "asd@fasd.de":{
            firstName: "Bort",
            lastName: "Simpson",
            userName: "bartoBlanco",
            description: "This is a profile description",
            email: "asd@fasd.de",
            password: "asd",
            profileImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAyCAIAAAClJN76AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QwTEgEwtvABBAAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAANCSURBVFjD7dfbT9NQGADwc05bytYxCaJgJjdZCCQYQhCMM2YPiw/w5As++1f4r/gXGJ4gPhDMMJhwMSgMDLcwwLFsUBqHg6WbLW3PxRdCMswubG1mIn1u8+v3ne+c830w/f4dqN2DQE0fvoJvaE4FjFrHCU6SSErhWnz0/Be6e5/3dTrIE0Ump7KxvcbOT+nv3N8vcA+7xP4h7p6Pe+CzkyfykRnbtqIbVM0ASgu+dhzXThLI2yj0DtR193O+tmp5Zug48UP/Ns9SMiOkjIWhNHNmri5YiZjraZDv8EPRVWHpMUM3tyJ6eJIqybLsqw8JoUpSD0+aWxFm6JVEzwzdWPtifv1MMa6sqqmuGQsfmWmIQ88L5aBg9ObmirE8V7F9+QcYG8tz5ubKzZJv7qwbi+EbJbzIQhiLYXNnvVye5lRjKVxl3NdzsBSmObUs/mJ+hqoZe083qmYu5mdK80SRrfgeY8xenjFmxfeIIpfgrfgu0DVHzndds+K7JXhzf9v20K8SYO5vF+NpTmWZtHP3G8ukrxVgHs+yWYYtB3lssWy2cPSaWuRGsWMDUKoVjh4QDJx+8on86Al1Wr9G1LjZyuNRfb3jXj6Rz0uNjvP5RD7f1IREBxOAxHrU1FSQh7zAtXU5x3NtXZAXipWe0DsAkDP1iJDQO1DizOfb/ai51RG9uZVv95fgkeRxBUL2JwAhVyCEJE+pdgMivrOH7/DbPEx1+PnOHgBR6W4H1onu0dc2bgEk1rtHX8M6sdxWE3m8YiAEIazehhCKgRDyeG/WaIvDQdRuwxKgdr84HKxkypHGxqFbqip0tySNjVc4ZKGGRnEkWA0vjgRRQ2PlMx6RE1Vd7nKi+IxXkMdKUpudwofRanh8GNVmp7CSvMmIySg+OtQ+fWBnp1V2vYwQHN0kKcX98hXf9qiMfc+odbCjT0/QdMqWjpsxRtMpfXrCOtgBjBaOnlGaU43IovV92cYB77IIcll9egIPPhOfvEAe71UaLnkrtmtFN6zYLjAuHBozKMZmZMncigjdfULvgNDdBwCAJ2/fWFur5Kdsyzhd7nnAcVyLT3g8DGODd5zt7Yteg6hmNgCA0n+p0b7lb/n/hv8DTvmaMgnushYAAAAASUVORK5CYII=",
            follows: [] 
        }                                               
    };

    tweets = [
        {
            author: {
                firstName: "Homer",
                lastName: "Simpson",
                userName: "elGrandeRicardo",
                description: "This is a profile description",
                email: "homer@simpson.com",
                password: "secret",
                profileImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAyCAIAAAClJN76AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QwTETULvpeljgAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAANJSURBVFjD7ZffShtBFMZnZnfdmARNoDQQ+yc10VqwjVChhWqU+ARC9LYXfahCX0Bv1CuxRFFBLVWSgjUaDQ01MVHBGOIqm83OzkwvpKHGZKPJbhXac7ews7/5vjl75hz48dMpuLtA4E6Db2CNJFFCQCqt2Wzo+Ji43VwuR10PkcfDm4jPZMnhIYlE1Nwpubhg11/wPOX7+1vcbu5RB2ckPn1AYjH1+xYuFCilNV/bT2npA83hQK9eCr29LU8ec83ii0X2I6ktLyuHR4SQ+hulFOTzdGW1lExqw8MWn5dvbYUNpl6xyCJRdWpaPsjciF0OQsBBhkxNy5GoWiyyRtQXi2x1rbS0XNI01lhWyzKb+6woCht4J9byoKb69Q11cUlpmH0ZmsYWl5T1DfV25kejanheuZXhOgcRnleiUfWmeEmi4YVmdVd4EF5QJIneCD87pxQK1NjqVijQ2TmlPj6TJYkEZsxYOmAMJBI4kyV18PE4lmWj4b9/hHgc18HHto2XXjYgtq2LlySaz1NgWuTztCIBr+LPGcbMPDzGTDpneuqpieIBpUBPvSF1pm4V0sEz8/HsHjVbV/D6d7MhUYG4gnc4TDejAnHlwelAFtFEAywidOrgBQE20K3ePDweXhBqmw8h6PMLyJwTQAj0+QUIdWu+z8e7XJwZeJeL8/n4OleO3Y5GghbDDUAIjAQtdjuqg0cIdHfxXq/BGeD18t1d/HVVVWSKIhwPWQ38BSwiHA9ZxWofrIKHELS1oWDQAo3YAIQgGLS0taGqX0O11gwFRG+nAUfg7eSHAmItJUhn12Mhq83WlAM2GxwLWXVc1EtxpxMFBsVm8IFB0elEjc94qVRTLUAqRfRnvJr4dFqbmpb3ErgZ/F4CT03L6bR2ixGTEPBzX5uZkXOntMmulxCwFcNHR2R01PrMw3NcPfWEgJ04npiUT3LUkI6bMXCSoxOT8k4cX2/m+D/7wLMzurJa+rquGjjgXcb5OZ2YlN++aRkcENvbUbn88Zcb3N3Dm5s4vosVhZk0ZmgaW/tSin5TX/QIfr/Q81yAEMD3Hw4jUZzNan+hzS0Hx4GODr7/tQDbHyRN7e31r0F0V+zLbLtPjfZ//H/8P4P/BaUljmJ8GjTRAAAAAElFTkSuQmCC",
                follows: []
            },
            text: "asdfasd",
            date: "asd",
            formattedDate: "Fri Dec 12 2017"
          },
          {
            author: {
                firstName: "Homer",
                lastName: "Simpson",
                userName: "elGrandeRicardo",
                description: "This is a profile description",
                email: "homer@simpson.com",
                password: "secret",
                profileImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAyCAIAAAClJN76AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QwTETULvpeljgAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAANJSURBVFjD7ZffShtBFMZnZnfdmARNoDQQ+yc10VqwjVChhWqU+ARC9LYXfahCX0Bv1CuxRFFBLVWSgjUaDQ01MVHBGOIqm83OzkwvpKHGZKPJbhXac7ews7/5vjl75hz48dMpuLtA4E6Db2CNJFFCQCqt2Wzo+Ji43VwuR10PkcfDm4jPZMnhIYlE1Nwpubhg11/wPOX7+1vcbu5RB2ckPn1AYjH1+xYuFCilNV/bT2npA83hQK9eCr29LU8ec83ii0X2I6ktLyuHR4SQ+hulFOTzdGW1lExqw8MWn5dvbYUNpl6xyCJRdWpaPsjciF0OQsBBhkxNy5GoWiyyRtQXi2x1rbS0XNI01lhWyzKb+6woCht4J9byoKb69Q11cUlpmH0ZmsYWl5T1DfV25kejanheuZXhOgcRnleiUfWmeEmi4YVmdVd4EF5QJIneCD87pxQK1NjqVijQ2TmlPj6TJYkEZsxYOmAMJBI4kyV18PE4lmWj4b9/hHgc18HHto2XXjYgtq2LlySaz1NgWuTztCIBr+LPGcbMPDzGTDpneuqpieIBpUBPvSF1pm4V0sEz8/HsHjVbV/D6d7MhUYG4gnc4TDejAnHlwelAFtFEAywidOrgBQE20K3ePDweXhBqmw8h6PMLyJwTQAj0+QUIdWu+z8e7XJwZeJeL8/n4OleO3Y5GghbDDUAIjAQtdjuqg0cIdHfxXq/BGeD18t1d/HVVVWSKIhwPWQ38BSwiHA9ZxWofrIKHELS1oWDQAo3YAIQgGLS0taGqX0O11gwFRG+nAUfg7eSHAmItJUhn12Mhq83WlAM2GxwLWXVc1EtxpxMFBsVm8IFB0elEjc94qVRTLUAqRfRnvJr4dFqbmpb3ErgZ/F4CT03L6bR2ixGTEPBzX5uZkXOntMmulxCwFcNHR2R01PrMw3NcPfWEgJ04npiUT3LUkI6bMXCSoxOT8k4cX2/m+D/7wLMzurJa+rquGjjgXcb5OZ2YlN++aRkcENvbUbn88Zcb3N3Dm5s4vosVhZk0ZmgaW/tSin5TX/QIfr/Q81yAEMD3Hw4jUZzNan+hzS0Hx4GODr7/tQDbHyRN7e31r0F0V+zLbLtPjfZ//H/8P4P/BaUljmJ8GjTRAAAAAElFTkSuQmCC",
                follows: []
            },
            text: "asdfasd",
            date: "asd",
            formattedDate: "Fri Dec 12 2015"
          }
    ];

}