import { RType } from '../base/rtype';
import { DebugInfo } from '../../types';

/** RISC-V RV32F fclass.s instruction. */
export class FCLASSS extends RType {
  /**
   * Creates a new RISC-V RV32F fclass.s instruction.
   *
   * @param debugInfo - Instruction debug information.
   * @param rd        - Destination register.
   * @param rs1       - Source register 1.
   */
  constructor(debugInfo: DebugInfo, rd: number, rs1: number) {
    super(debugInfo, 'fclass.s', 0x53, rd, 0x1, rs1, 0x0, 0x70);
  }
}
