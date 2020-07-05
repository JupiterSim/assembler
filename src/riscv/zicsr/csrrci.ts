import { IType } from '../base/itype';
import { DebugInfo } from '../../types';
import { Expression } from '../../expr';

/** RISC-V RV32Zicsr csrrci instruction. */
export class CSRRCI extends IType {
  /**
   * Creates a new RISC-V RV32Zicsr csrrci instruction.
   *
   * @param debugInfo - Instruction debug information.
   * @param rd        - Destination register.
   * @param uimm      - Unsigned immediate.
   * @param csr       - Control and status register.
   */
  constructor(debugInfo: DebugInfo, rd: number, uimm: number, csr: Expression) {
    super(debugInfo, 'csrrci', 0x73, rd, 0x7, uimm, csr);
  }
}
